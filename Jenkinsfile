pipeline {
  agent any
  stages {
    stage('rebuild') {
      steps {
        sh '''ssh -i /var/jenkins_home/.ssh/pa8.pem ubuntu@35.180.187.223'''
        sh '''cd nestjs-backend'''
        sh '''docker-compose --version'''
        sh '''docker-compose up --build -d'''
      }
    }
  }
}
