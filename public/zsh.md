---
id: ff775cda-d1da-4e8f-889a-5315629079a7
title: Zsh
desc: ''
updated: 1612392113552
created: 1612392113552
---
```bash
# Read function definition
whence -f ..

# See where the it was defined
whence -v
```

```bash
# Bind comand to alt key
# alt+i will run 'a' command.
# \e means opt key
bindkey -s '\ei' '^Ua^M'
```

```bash
# See what is binded to a key
# See what is binding to ⌃ + E
bindkey '^E'
```

```bash
# Run zsh without sourcing zshrc
zsh -f
```

```bash
# Set alias to external command
alias fin='command fd'
```

```bash
# List all bindings
bindkey
```

