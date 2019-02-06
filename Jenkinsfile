pipeline {
  environment {
        PATH = "$PATH:/usr/local/bin/docker-compose"
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
