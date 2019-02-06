pipeline {
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
