pipeline {
  environment {
        PATH = "$PATH:/usr/local/bin"
  }
  agent any
  stages {
    stage('rebuild') {
      steps {
        sh '''cd /var/app'''
        sh '''docker-compose up --build -d'''
      }
    }
  }
}
