pipeline {
    agent any
    stages {
      stage('Build') {
          steps {
            wrap(delegate: [$class: 'NodeJSBuildWrapper', nodeJSInstallationName: 'angular-cli' ]) {
              sh 'npm install'
              sh 'npm run build-prod'
              script {
                def image = docker.build('us.gcr.io/primavera-188715/dev-ui:0.0.1')
                docker.withRegistry('https://us.gcr.io', 'gcr:[Primavera-Dev]') {
                  image.push()
                }
              }
            }
          }
        }
    }
}
