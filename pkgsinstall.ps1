# Script to install NodeJS, GitHub CLI, and Git via Winget

$packages = @(
    "OpenJS.NodeJS",
    "GitHub.cli",
    "Git.Git"
)

Write-Host "Starting installation..." -ForegroundColor Cyan

foreach ($package in $packages) {
    Write-Host "Installing $package..." -ForegroundColor Yellow
    winget install -e --id $package --accept-source-agreements --accept-package-agreements
}

Write-Host "All installations complete! Please restart your terminal." -ForegroundColor Green