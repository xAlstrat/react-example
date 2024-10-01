# Pluscoder


PlusCoder is an AI-assisted software development tool designed to enhance and streamline the software development process. It leverages multiple specialized AI agents to assist with various aspects of development, from planning and implementation to validation and project management.

## Key Features

1. Automated repository analysis and documentation
2. Automated context reading and file editing by agents
3. Multi-agent task-based workflows executions for complex requirements
4. User approvals for key points in the workflow or fully automated runs
5. Auto-commit on editions
6. Cost and token tracking for LLM interactions
7. Flexible configuration system supporting command-line arguments, environment variables, and default values
8.  Support for multiple LLM models (LLMLite, OpenAI, AWS Bedrock, Anthropic)
9.  Enhanced user interaction with rich console output and auto-completion
10. Real-time task execution progress display

[Full Documentation](https://gitlab.com/codematos/pluscoder/-/blob/main/README.md)

## Setup

### 1 Add your credentials


**Anthropic**:

Add your .env:
```
MODEL=claude-3-5-sonnet-20240620
ANTHROPIC_API_KEY=<your-key>
```

**OpenAI**:

Add your .env:
```
MODEL=gpt4o
OPENAI_API_KEY=<your-key>
# OPENAI_API_BASE=<custom-openapi-base-url>
```

### 2 Run
1. Open Terminal: `Ctrl + J`
2. Run Pluscoder: `plus-coder`
