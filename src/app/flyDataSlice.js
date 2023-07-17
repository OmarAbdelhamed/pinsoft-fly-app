import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0, // buraya json web servara yüklenen datamız gelecek.
}

export const flyDataSlice = createSlice({
  name: 'flydata',
  initialState,
  reducers: {    // bu alana ise uygulamanın her alanından erişebileceğimiz ve dataları manipüle edebileceğimiz fonksiyonlar gelecek.
    increment : (state)=> { //örn. fonskiyon
      state.value+= 1
    },
    
  },
})


export const { increment  } = flyDataSlice.actions   //--> fonksiyonları dışarı aktarma.

export default flyDataSlice.reducer