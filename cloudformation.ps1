$prfile = "org_role"

$regionOutput = aws ec2 describe-regions --profile $prfile --query "Regions[].RegionName" --output text
$regions = $regionOutput -split "\s+"

foreach ($region in $regions) {
    Write-Host "Checking region: $region"
    
    $stacks = aws cloudformation describe-stacks --region $region --profile $prfile --query "Stacks[].StackName" --output text

    Write-Host "$stacks"

    # if ($stacks -ne "") {
    #     Write-Host "  Found stacks in $region"
    #     $stacks.Split("`n") | ForEach-Object { Write-Host "    - $_" }
    # } else {
    #     Write-Host "  No stacks found in $region."
    # }
}
