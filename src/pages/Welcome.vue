<template>
  <Content>
    <Step current="1" />
    <h2>Seja bem vindo(a)</h2>
    <div class="welcome">
      <Field>
        <Input label="Endereço de e-mail" :value.sync="person.email" id="email" />
      </Field>
      <Field>
        <RadioGroup v-model="person.person_type" @changed="person.person_type = $event" />
      </Field>
      <Field>
        <Button label="Continuar" to="/" />
      </Field>
    </div>
  </Content>  
</template>

<script>
import Content from "@/template/content/Content";
import Field from "@/components/field/Field";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import RadioGroup from "@/components/radio-group/RadioGroup";
import Step from "@/components/step/Step";

export default {
  name: 'Welcome',
  components: { Content, Field, Input, Button, RadioGroup, Step },
  data: () => {
    return {
      foo: '',
      person: {
        email: '',
        person_type: '',
      }
    }
  },
   methods: {
    test(e) {
      console.log("test", e);
    }
  }
}
</script>

<style></style>