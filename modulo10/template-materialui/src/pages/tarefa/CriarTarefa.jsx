import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, MenuItem, Select, Grid, Card, CardHeader, CardContent, Button } from '@mui/material';

const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [tarefa, setTarefa] = useState({
    idTarefa: '',
    tituloTarefa: '',
    descricaoTarefa: '',
    inicioTarefa: '',
    fimTarefa: '',
    recursoTarefa: '',
    statusTarefa: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTarefa({ ...tarefa, [name]: value });
  };

  const handleSalvar = () => {
    console.log('Dados da Tarefa:', tarefa);
    setTarefas([...tarefas, tarefa]);
    handleClose();
  };

  return (
    <Grid container justifyContent="center">
      <Card sx={style}>
        <CardHeader title="Tarefas" subheader="Cadastro de Tarefas" />
        <CardContent>
          <FormControl fullWidth>
            <Input name="tituloTarefa" id="tarefa_titulo" value={tarefa.tituloTarefa} onChange={handleChange} />
            <FormHelperText id="tarefa_titulo_helper_text">Título da Tarefa.</FormHelperText>
          </FormControl>
          {/* ... (restante dos inputs) ... */}
          <Grid container justifyContent="space-between" mt={2}>
            <Button variant="contained" onClick={handleSalvar}>Salvar</Button>
            <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  p: 4,
};

export default CriarTarefa;