import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState({});
  const [username, setUsername] = useState('Nome do Usuário');
  const [password, setPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const selectImageFromGallery = () => {
    
  };

  const handleSaveChanges = () => {
    
    

    
    setUsername(username);
    setPassword(password);

    setIsEditing(false);

    setConfirmationMessage('Alterações salvas com sucesso!');

    setTimeout(() => {
      setConfirmationMessage('');
    }, 5000);
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require('./src/assets/realcangaiba.jpeg')}
    >
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <ImageBackground
            source={require('./src/assets/macacolouco.jpg')}
            style={styles.profileImage}
          >
            {isEditing ? (
              <View style={styles.editingContainer}>
                <TextInput
                  placeholder="Novo Nome de Usuário"
                  value={username}
                  onChangeText={(text) => setUsername(text)}
                  style={styles.input}
                />
                <TextInput
                  placeholder="Nova Senha"
                  secureTextEntry
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  style={styles.input}
                />
                <Button title="Salvar Alterações" onPress={handleSaveChanges} />
                <Text style={styles.log}>{confirmationMessage}</Text>
              </View>
            ) : null}
          </ImageBackground>
          <Text style={styles.username}>{username}</Text>
        </View>
        <View style={styles.middleContainer}>
          <Button title="Editar Perfil" onPress={() => setIsEditing(true)} />
          <TouchableOpacity
            style={styles.editButton}
            onPress={selectImageFromGallery}
          >
            <Text style={styles.editButtonText}>Trocar Foto de Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.logoutButtonContainer}>
        <Button title="Sair" onPress={() => {/* Funcionalidade de logout aqui */} } />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  profileImage: {
    width: 150,
    height: 150,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  editingContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 8,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
  },
  editButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    margin: 10,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoutButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    padding: 10,
  },
  log: {
    color: 'green',
    fontSize: 16,
    marginTop: 10,
  },
});

export default ProfileScreen;
