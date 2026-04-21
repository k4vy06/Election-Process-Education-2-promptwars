@echo off
REM Election Guide AI - Quick Start Script for Windows

echo.
echo ====================================
echo  Election Guide AI - Quick Start
echo ====================================
echo.

REM Check if Node.js is installed
echo Checking for Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js found: && node --version

REM Check if npm is installed
echo Checking for npm...
npm --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: npm is not installed!
    pause
    exit /b 1
)

echo ✓ npm found: && npm --version
echo.

REM Check if .env.local exists
if not exist ".env.local" (
    echo WARNING: .env.local not found!
    echo Please copy .env.example to .env.local and add your OpenAI API key.
    echo.
    echo Steps:
    echo 1. Copy .env.example to .env.local
    echo 2. Edit .env.local and add your API key
    echo 3. Run this script again
    echo.
    pause
    exit /b 1
)

echo ✓ .env.local found
echo.

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo ERROR: npm install failed!
        pause
        exit /b 1
    )
    echo ✓ Dependencies installed
) else (
    echo ✓ Dependencies already installed
)

echo.
echo Starting development server...
echo.
echo 🚀 Server starting at http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

REM Start the development server
call npm run dev

pause
