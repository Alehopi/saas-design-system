---
name: save
description: Commit all changes to git and push to remote. Use when you want to save work to the repository.
disable-model-invocation: true
allowed-tools: Bash(git *)
---

# Save Work to Repository

Commit and push all pending changes to git with an automated or custom message.

## Your Task

Execute these git operations in order:

### 1. Check Status
First, run `git status` to see what changes are pending.

### 2. Stage All Changes
Run `git add .` to stage all modified and new files.

### 3. Create Commit
Create a commit with the following logic:

**If the user provided arguments** (e.g., `/save Fix theme bugs`):
- Use `$ARGUMENTS` as the commit message
- Add the co-authored-by line at the end

**If no arguments provided** (just `/save`):
- Generate a message with format: `Save work - YYYY-MM-DD HH:MM`
- Add the co-authored-by line at the end

**Commit format:**
```bash
git commit -m "$(cat <<'EOF'
[Message here]

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

### 4. Push to Remote
Run `git push` to push to the current branch's upstream remote.

### 5. Report Results
- Show the commit SHA and message
- Confirm push was successful
- If any step fails, stop and explain the error clearly

## Error Handling

- If no changes to commit: Report "Nothing to commit, working tree clean"
- If push fails: Explain the error (conflicts, no upstream, network issues, etc.)
- If not in a git repository: Report the error clearly

## Examples

```bash
/save
# Creates: "Save work - 2026-02-04 17:30"

/save Rebrand to APEX Design System
# Creates: "Rebrand to APEX Design System"

/save Update components and fix theming issues
# Creates: "Update components and fix theming issues"
```

## Important Notes

- Always use HEREDOC format for commit messages to handle multi-line text
- Always add the Co-Authored-By line
- Show final git log entry after successful commit
- Stop at any error and explain what went wrong
