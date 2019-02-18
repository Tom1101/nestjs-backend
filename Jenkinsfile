pipeline {
  agent any
  stages {
    stage('rebuild') {
      steps {
        sh '''sh /var/jenkins_home/deploy.sh'''
      }
    }
  }
}
