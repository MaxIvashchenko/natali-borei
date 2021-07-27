import { firestore } from "./firebase";

const getItems = async () => {
  const snapshot = await  firestore.collection('items').get();
 const v =  snapshot.docs.map(docs => docs.data());

 const postData = [];
      snapshot.forEach((doc) => postData.push( doc.data()));


return postData
};

const setItems = async (item) => {
    const snapshot = await  firestore.collection('items').add(item);
}

export { getItems , setItems}