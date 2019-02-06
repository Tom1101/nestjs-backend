pipeline {
  environment {
        PATH = "$PATH:/usr/local/bin/docker-compose"
  }
  agent any
  stages {
    stage('rebuild') {
      steps {
        sh '''cd /usr/src/app'''
        sh '''docker-compose up --build -d'''
      }
    }
  }
}
