pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: "cypress/Integration/Testing/*.js", description: "Enter the script name")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'electron'], description: "Which browser do you want to execute?")
    }

    stages {
        stage('Building') {
            steps {
                echo "Building the project"
            }
        }

        stage("Testing") {
            steps {
                bat "npm ci"
                bat "npx cypress install"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }

        stage("Deploying") {
            steps {
                echo "Deploying project"
            }
        }

        stage("Publish Report") {
            steps {
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

    post {
        success {
            emailext(
                to: 'shaiz.akber@venturedive.com',
                subject: "Jenkins Pipeline Success: Job ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                    <p>Good news! The build was successful for Job <b>${env.JOB_NAME}</b> - Build #<b>${env.BUILD_NUMBER}</b>.</p>
                    <p><b>Parameters Used:</b></p>
                    <ul>
                        <li><b>SPEC:</b> ${params.SPEC}</li>
                        <li><b>BROWSER:</b> ${params.BROWSER}</li>
                    </ul>
                    <p>Check the <a href="${env.BUILD_URL}">build details</a> and <a href="${env.BUILD_URL}/HTML_Report/index.html">HTML Report</a>.</p>
                """,
                mimeType: 'text/html'
            )
        }
    }
}
