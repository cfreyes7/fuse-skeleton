pipeline {
    agent any
      stages {
        stage('Build') {
            steps {
              wrap(delegate: [$class: 'NodeJSBuildWrapper', nodeJSInstallationName: 'angular-cli' ]) {
                        sh 'npm install'
                        }
            }
          }
      }
}
