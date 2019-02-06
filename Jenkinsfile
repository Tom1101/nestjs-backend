pipeline {
  agent any
  stages {
    stage('rebuild') {
      steps {
        sh '''cd /var/app'''
        sh '''sudo docker-compose up --build -d'''
      }
    }
  }
}
