#!/bin/bash

# Check if status argument is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <status>"
    exit 1
fi

# Define variables
url="http://localhost:3000/api/status"
status="$1"
token="diller"

# Create JSON data
data="{ \"token\": \"$token\", \"status\": \"$status\" }"

# Print the curl command
echo "curl -v -X POST -H \"Content-Type: application/json\" -d '$data' '$url'"

# Send POST request using curl with verbose output
curl -v -X POST -H "Content-Type: application/json" -d "$data" "$url"