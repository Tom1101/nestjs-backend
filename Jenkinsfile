pipeline {
  agent any
  stages {
    stage('rebuild') {
      steps {
        sh '''cd /usr/src/app
docker-compose build nest
docker-compose up -d nest'''
      }
    }
  }
}