pipeline {
  agent any
  stages {
    stage('Build') {
      step([$class: 'DockerComposeBuilder', dockerComposeFile: 'docker-compose.yml', option: [$class: 'ExecuteCommandInsideContainer', command: 'up --build -d', index: 1, privilegedMode: false, service: 'nest', workDir: ''], useCustomDockerComposeFile: true])
    }
  }
}
