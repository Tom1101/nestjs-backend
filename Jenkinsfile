pipeline {
  environment {
        PATH = "$PATH:/usr/local/bin/docker-compose"
  }
  agent any
  stages {
    stage('rebuild') {
      steps {
        sh '''cd /usr/src/app
sudo docker-compose up --build -d'''
      }
    }
  }
}
