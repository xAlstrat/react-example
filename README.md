# Pluscoder
[Full Documentation](https://gitlab.com/codematos/pluscoder/-/blob/main/README.md)


### Run

1. Basic: `pluscoder`
2. Custom model and provider: `OPENAI_API_KEY=<your key> pluscoder --model gpt-4o --provider openai --openai_api_base https://your-api-base/`

### Chat mode: Chat about the repo

1. Run `pluscoder --read_only`
2. Choose Domain Stakeholder Agent (`2`)
3. Ask "Tell me how can I update the footer to add my social media info"
4. `q` or `Ctrl+C` to quit

### Editor mode: Edit any file in any way

1. Run: `pluscoder --auto_commits false`
2. Choose Developer Agent (`4`)
3. Ask: `Make the image nodes to look circular instead of squared`
4. Run `/agent` and choose Stakeholder Agent `2` 
5. Ask:
    ```
    Download this file https://raw.githubusercontent.com/xAlstrat/react-example/refs/heads/main/example/FEATURES.md and base on its structure to document MAIN_FEATURES.md for this project
    ```

### Task based workflows
Define a list of task with the Orchestrator Agent to delegate:
Example:
1. Run `pluscoder --auto-commits true --auto_confirm true`
2. Choose Orchestrator Agent (`1`)
3. Write `/custom documentation` (look [.pluscoder-config.yml](.pluscoder-config.yml) to see custom instruction)
4. If tasks doesn't start, tell the agent: `Delegate doc tasks now`

### Features
1. Clear the chat `/clear`
2. Show repository files context `/show_repo`
3. Show configuration `/show_config`
4. Option+Enter for multiline input

[Full Documentation](https://gitlab.com/codematos/pluscoder/-/blob/main/README.md)
