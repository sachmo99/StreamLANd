# Backend Documentation and API Endpoints Design
## Edited 2024 Oct 15
Tech stack: NodeJS and Express

Endpoint 1: "/"
function: Used for homepage content (if any) and healthcheck

Endpoint 2: "/list"
function: List all folders with transcoded video content present
return type: list of strings

Endpoint 3: "/video/:videoId/:segmentId?"
function: Start streaming a video with the name given in the parameters
return type: MIME with