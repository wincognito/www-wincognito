<template>
    <section id="contact">
        <div class="container">
                <div class="col-lg-12 text-center">
                    <h2 class="text-uppercase section-heading">Kontakt</h2>
                    <h3 class="text-muted section-subheading">Wincognito, Pawel Idzikowski<br>Hans-Kalscheuer-Str. 45<br>51149 Köln<br>02203 98 97 2010<br>info@wincognito.de</h3>
                </div>            

                <form id="contactForm" name="contactForm" novalidate="novalidate" :action="serverurl" enctype="multipart/form-data" method="post" @submit.prevent="submitForm">
                <div class="contact-form mx-auto">
                    <input class="form-control" type="hidden" name="clientid" :value="clientid">
                    <input class="form-control" type="hidden" name="Subject">
                    <div class="form-group mb-3">
                        <input class="form-control" 
                                type="email" 
                                id="email" 
                                placeholder="Ihre E-Mail" 
                                required="" 
                                name="senderEmail"
                                v-model.trim="email" 
                                v-bind:class="{'is-invalid':$v.email.$error}" />
                        <small v-if="$v.email.$error" class="form-text text-danger help-block lead">Bitte eine gültige E-Mail Adresse eingeben.</small>
                        </div>
                    <div class="form-group mb-3">
                        <textarea class="form-control" 
                                    id="message" 
                                    placeholder="Ihre Nachricht" 
                                    required="" 
                                    minlength="10" 
                                    maxlength="1000" 
                                    name="text" 
                                    v-model.trim="text"
                                    v-bind:class="{'is-invalid':$v.text.$error}">
                        </textarea>
                        <small v-if="$v.text.$error" class="form-text text-danger help-block lead">{{ textError }}</small>
                    </div>
                    <div>
                        <div class="form-check">
                            <input id="acceptConditions-1" 
                                    class="form-check-input" 
                                    type="checkbox" 
                                    v-model="accept" 
                                    v-bind:class="{'is-invalid':$v.accept.$error}" />
                            <label class="form-check-label text-light" for="acceptConditions-1">Sie akzeptieren meine <a href="#privacy" data-bs-toggle="modal" data-bs-target="#privacy">Datenschutzrichtlinien</a>, oder?</label><br/>                        
                        </div>
                        <small v-if="$v.accept.$error" class="form-text text-danger help-block lead">Bitte die Datenschutzrichtlinien akzeptieren.</small>                        
                    </div>
                    <div class="text-center mt-5">
                        <toast-component ref="contacttoast" :text="message.text" :error="message.isError"></toast-component>
                        <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit" >Nachricht Senden</button>
                    </div>
                </div>
                </form>
        </div>
        
    </section>  
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minValue, email, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
    props: [
        'clientid',
        'serverurl'
        ],
    data: function() {
        return {
            subject: '',
            email: '',
            text: '',
            accept: '',
            message: {
                text: '',
                isError: false
            }
        }
    },
    mixins: [
        validationMixin
    ],
    methods: {
        async submitForm() {

            this.$v.$touch()

            if (this.$v.$invalid){
                console.log("es ist invalid")
                return
            }

            const formData = new FormData();
            formData.append('clientId', this.clientid)
            formData.append('senderEmail', this.email)
            formData.append('subject', this.subject)
            formData.append('text', this.text)

            try {
            
            const response = await this.$axios.post(this.serverurl, formData)

            this.reset()

            this.showMessage("Vielen Dank für Ihre Nachricht!")

            } catch (error) {
                console.log('error', error)          
                this.showMessage("Ein Fehler ist beim Versand passiert.", true)
            }            

        },

        async showMessage(text, isError) {

            this.message.isError = isError
            this.message.text = text

            var toast = this.$refs.contacttoast
            await this.$nextTick(()=>toast.showToast())            
        },

        reset() {
            this.subject = ''
            this.email = ''
            this.text = ''
            this.accept = ''
            this.$v.$reset()
        }
    },

    validations: {
        email: {
            required,
            email,
            maxLength: maxLength(200)
        },
        text: {
            required,
            minLength: minLength(10),
            maxLength: maxLength(1000)
        },
        accept: {
            required,
            minValue: minValue(1)
        }
    },

    computed: {
        textError() {
            let v = this.$v.text
            if (!v.required || !v.minLength) {
                return "Ihre Frage? Anmerkung?"
            }

            if (!v.maxLength) {
                return `Die Nachricht darf ${v.$params.maxLength.max} Zeichen nicht überschreiten.`
            }

            return ''
        }
    }
}
</script>

<style scoped>
.contact-form {
    max-width: 576px;
}
</style>