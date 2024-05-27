pipeline{

    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/Integration/Testing/*.js", description: "Enter the script name")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'electron'], description: "Which browser wanna execute")
    }

    options{
        ansiColor('xterm')
    }
    
    stages{
        stage('Building'){
            steps{
                echo "Building the project"
            }
        }

        stage("Testing"){
            steps{
                bat "npm ci"
                bat "npx cypress install"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }

        stage("Deploying"){
            steps{
                echo "Deploying project"
            }
        }

        stage("publish report"){
            steps{
                 publishHTML([
                allowMissing: false, 
                alwaysLinkToLastBuild: true, 
                keepAll: false, 
                reportDir: "cypress", 
                reportFiles: "index.html", 
                reportName: 'HTML Report', 
                reportTitles: ''
                ])
            }
        }
    }
}
