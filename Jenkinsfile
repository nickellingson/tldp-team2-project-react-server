node {
    
    stage('Checkout') {
       git branch: 'main', url: '/https://github.com/nickellingson/tldp-team2-project-react-server.git'
    }
    
    stage('Install Dependencies') {
        sh 'npm install'
    }
    
    stage('Run') {
        sh 'node server &'
    }
    
    stage('Postman Tests') {
        sh 'npx newman run Playground.postman_collection.json'
    }
}
