pipeline {
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
