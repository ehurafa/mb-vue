<template>
  <Content>
    <div>{{ person }}</div>
    <div class="welcome">
      <Field>
        <Input type="email" label="Endereço de e-mail" :value.sync="person.email" id="email" email />
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

export default {
  name: 'Welcome',
  components: { Content, Field, Input, Button, RadioGroup },
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