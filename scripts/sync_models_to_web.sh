#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC_ROOT="$ROOT/assets/3d/glb"
DST_ROOT="$ROOT/web/public/models"

mkdir -p "$DST_ROOT"

if [ ! -d "$SRC_ROOT" ]; then
  echo "Missing source directory: $SRC_ROOT"
  exit 1
fi

rsync -av --delete "$SRC_ROOT/" "$DST_ROOT/"

echo "Synced models to $DST_ROOT"
