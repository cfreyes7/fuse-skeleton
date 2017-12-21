pipeline {
    agent any
    environment {
       GCLOUD_API_KEYFILE = credentials('b5999753-f2ef-4806-9369-5bd5e89c1db8')
    }
      stages {
        stage('Build') {
            steps {
              wrap(delegate: [$class: 'NodeJSBuildWrapper', nodeJSInstallationName: 'angular-cli' ]) {
                sh 'npm install'
                sh 'npm run build-prod'
                script {
                  def image = docker.build('us.gcr.io/primavera-188715/dev-ui:0.0.1')
                }
                docker.withRegistry('https://us.gcr.io', 'gcr:[b5999753-f2ef-4806-9369-5bd5e89c1db8]') {
                    app.push('us.gcr.io/primavera-188715/dev-ui:0.0.1')
                }
              }
            }
          }
      }
}
