// @ts-nocheck
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import { darkmode, user } from '../store/store';

export const getData = async () => {
    let theme, email;

    darkmode.subscribe(value => {
        theme = value;
    });

    user.subscribe(value => {
        email = value.email;
    });

    const data = {
        notes: [],
        settings: {
            darkmode: theme
        }
    };

    const querySnapshot = await getDocs(collection(db, "notes"));

    querySnapshot.forEach(doc => {
        if (doc.data().user === email) {
            data.notes.push({ ...doc.data(), collectionId: doc.id });
        }
    });

    return { ...data };
}

export const newNote = async note => {
    try {
        const docRef = await addDoc(collection(db, "notes"), { ...note });
        return docRef.id;
    } catch (error) {
        return '';
    }
}

export const updateNote = async note => {
    const updatingNote = doc(db, "notes", note.collectionId);
    await updateDoc(updatingNote, note);
}

export const removeNote = async id => {
    let notes = [];

    const querySnapshot = await getDocs(collection(db, "notes"));

    querySnapshot.forEach(doc => {
        notes.push({ ...doc.data(), collectionId: doc.id });
    });

    const index = notes.findIndex(n => n.id === id);

    await deleteDoc(doc(db, "notes", notes[index].collectionId));
}

export const darkTheme = darkmode => {
    const theme = localStorage.getItem('darkmode');

    if (theme) {
        if (darkmode) {
            localStorage.setItem('darkmode', 'true');
        } else {
            localStorage.setItem('darkmode', 'false');
        }
    } else {
        localStorage.setItem('darkmode', 'true');
    }
}