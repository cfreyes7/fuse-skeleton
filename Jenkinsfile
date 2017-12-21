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
                  docker.build('us.gcr.io/primavera-188715/dev-ui:0.0.1')
                }
                sh 'echo $GCLOUD_API_KEYFILE | base64 --decode --ignore-garbage > ./gcloud-api-key.json'
                sh 'gcloud auth activate-service-account --key-file gcloud-api-key.json'
                sh 'gcloud docker -- push us.gcr.io/primavera-188715/dev-ui:0.0.1'
              }
            }
          }
      }
}
