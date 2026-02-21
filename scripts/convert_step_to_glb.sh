#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC_ROOT="$ROOT/assets/cad/raw-step"
DST_ROOT="$ROOT/assets/3d/glb"
TMP_DIR="${TMPDIR:-/tmp}/robotics-step-mesh"

mkdir -p "$DST_ROOT" "$TMP_DIR"

if ! command -v gmsh >/dev/null 2>&1; then
  echo "gmsh is required. Install with: sudo apt install -y gmsh"
  exit 1
fi

if ! command -v assimp >/dev/null 2>&1; then
  echo "assimp is required. Install with: sudo apt install -y assimp-utils"
  exit 1
fi

echo "Converting STEP files from $SRC_ROOT to GLB in $DST_ROOT"

success=0
failed=0

while IFS= read -r -d '' step_file; do
  rel_path="${step_file#$SRC_ROOT/}"
  rel_no_ext="${rel_path%.*}"
  stl_out="$TMP_DIR/${rel_no_ext}.stl"
  glb_out="$DST_ROOT/${rel_no_ext}.glb"

  mkdir -p "$(dirname "$stl_out")" "$(dirname "$glb_out")"

  if gmsh "$step_file" -2 -clmax 2 -format stl -o "$stl_out" -v 1 >/dev/null 2>&1 \
    && assimp export "$stl_out" "$glb_out" -f glb2 >/dev/null 2>&1; then
    echo "OK   $glb_out"
    success=$((success + 1))
  else
    echo "FAIL $step_file"
    failed=$((failed + 1))
  fi
done < <(find "$SRC_ROOT" -type f \( -iname '*.step' -o -iname '*.stp' \) -print0)

echo "Done. Success: $success  Failed: $failed"
