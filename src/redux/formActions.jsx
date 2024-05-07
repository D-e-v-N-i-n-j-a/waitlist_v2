import db from "./firebase/firebaseConfig";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";

export const submitFormRequest = () => ({
  type: 'SUBMIT_FORM_REQUEST'
});

export const submitFormSuccess = () => ({
  type: 'SUBMIT_FORM_SUCCESS'
});

export const submitFormFailure = (error) => ({
  type: 'SUBMIT_FORM_FAILURE',
  error
});

export const submitForm = (email) => async (dispatch) => {
  dispatch(submitFormRequest());

  try {
    const q = query(collection(db, 'waitlist'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      throw new Error('Email already exists');
    }

    await addDoc(collection(db, 'waitlist'), {
      email: email,
      completed: false
    });

    dispatch(submitFormSuccess());
  } catch (error) {
    dispatch(submitFormFailure(error));
    console.log(error)
    throw error;
  }
};
