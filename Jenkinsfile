pipeline{

    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/Integration/Testing/*.js", description: "Enter the script name")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'electron'], description: "Which browser wanna execute")
    }
    
    stages{
        stage('Building'){
            steps{
                echo "Building the project"
            }
        }

        stage("Testing"){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }

        stage("Deploying"){
            steps{
                echo "Deploying project"
            }
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report' ,reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }
}