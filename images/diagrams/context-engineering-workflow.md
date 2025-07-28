```mermaid
flowchart TD
    title["Context Engineering Workflow"]
    title --- A
    
    A[Define Project Rules] -->|Establish guidelines| B[Create Feature Request]
    B -->|Clear requirements| C[Generate Implementation Plan]
    C -->|Detailed steps| D[Execute Plan]
    D -->|Implementation| E[Validate]
    E -->|Passes validation| F[Complete]
    E -->|Fails validation| D
    
    %% Style nodes with contrasting text colors for better visibility
    style title fill:none,stroke:none,color:white,font-weight:bold,font-size:18px
    style A fill:#f9d5e5,stroke:#333,stroke-width:2px,color:black
    style B fill:#eeac99,stroke:#333,stroke-width:2px,color:black
    style C fill:#e06377,stroke:#333,stroke-width:2px,color:white
    style D fill:#c83349,stroke:#333,stroke-width:2px,color:white
    style E fill:#5b9aa0,stroke:#333,stroke-width:2px,color:white
    style F fill:#d6e1c7,stroke:#333,stroke-width:2px,color:black
```

**Note:** This is a Mermaid diagram that can be rendered in GitHub or other Markdown viewers that support Mermaid syntax. If your viewer doesn't support Mermaid, you'll need to use a Mermaid renderer or convert this to an image.
