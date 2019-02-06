pipeline {
  environment {
        PATH = "$PATH:/usr/local/bin/"
  }
  agent any
  stages {
    stage('rebuild') {
      steps {
        sh '''cd /usr/src/app
docker-compose up --build -d'''
      }
    }
  }
}
