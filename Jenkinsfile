pipeline {
    agent any
      stages {
        stage('Build') {
            steps {
              nodejs('angular-cli') {
                        npm install
                      }
            }
          }
      }
}
