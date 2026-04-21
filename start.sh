#!/bin/bash

# Election Guide AI - Quick Start Script for macOS/Linux

echo ""
echo "===================================="
echo "  Election Guide AI - Quick Start"
echo "===================================="
echo ""

# Check if Node.js is installed
echo "Checking for Node.js..."
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo "Download from: https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js found: $(node --version)"

# Check if npm is installed
echo "Checking for npm..."
if ! command -v npm &> /dev/null; then
    echo "ERROR: npm is not installed!"
    exit 1
fi

echo "✓ npm found: $(npm --version)"
echo ""

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "WARNING: .env.local not found!"
    echo "Please copy .env.example to .env.local and add your OpenAI API key."
    echo ""
    echo "Steps:"
    echo "1. Copy .env.example to .env.local"
    echo "2. Edit .env.local and add your API key"
    echo "3. Run this script again"
    echo ""
    exit 1
fi

echo "✓ .env.local found"
echo ""

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "ERROR: npm install failed!"
        exit 1
    fi
    echo "✓ Dependencies installed"
else
    echo "✓ Dependencies already installed"
fi

echo ""
echo "Starting development server..."
echo ""
echo "🚀 Server starting at http://localhost:3000"
echo "Press Ctrl+C to stop the server"
echo ""

# Start the development server
npm run dev
