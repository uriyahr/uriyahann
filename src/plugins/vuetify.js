import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);


export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                backgroundMain: '#0a192f',
                backgroundPrimary: '#172a45',
                backgroundSecondary: '#303C55',
                textPrimary: '#ccd6f6',
                textSecondary: '#64ffda',
            }
        }
    }
});
