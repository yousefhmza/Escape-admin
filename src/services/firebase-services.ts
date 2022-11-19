import firestore from '@react-native-firebase/firestore';
import {firestoreCollections} from '../utils/constants';
import {TAdmin} from '../utils/types';

export const getAdmin = async (id: string): Promise<TAdmin | Error> => {
  try {
    const data = await firestore().collection(firestoreCollections.admins).doc(id).get();
    if (!data.exists) throw new Error("This admin doesn't exist");
    const admin: TAdmin = {
      id: data.data()!.id,
      name: data.data()!.name,
      email: data.data()!.email,
      type: data.data()!.type,
    };
    return admin;
  } catch (e: any) {
    return Error(e.message);
  }
};
