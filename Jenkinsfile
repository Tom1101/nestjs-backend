pipeline {
  agent any
  stages {
    stage('rebuild') {
      steps {
        sh '''ssh -t -i /var/jenkins_home/.ssh/pa8.pem ubuntu@35.180.187.223 << OEF
            cd nestjs-backend
            docker-compose --version
            docker-compose up --build -d
            OEF
        '''
      }
    }
  }
}
