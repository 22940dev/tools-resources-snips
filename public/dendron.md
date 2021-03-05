---
id: 32d919f1-bfb1-4e33-b502-f85b4f2a05fc
title: Dendron
desc: ""
updated: 1614987018312
created: 1612808707554
---

## Test with debugger

- There is task in tasks.json for dendron-cli. `build-site`. Change command to point at the workspace you want to test.

## Notes

- `markdown/remark` is place where markdown gets transformed.
- `dendronPub` is transformer
- `proc` means processor in code. It's used for parsing & comes from [remark](https://remark.js.org/)
- use `src/` imports for auto importing modules from suggestions (over lib)
- prefer `@package` on imports
- dendron looks for `dendron.code-workspace` file, if it finds it, it will open dendron workspace automatically
