package com.projeto.integrado.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.integrado.entity.User;
import com.projeto.integrado.entity.Projeto;
import com.projeto.integrado.entity.Recurso;
import com.projeto.integrado.entity.Tarefa;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUserEmail(String email);
}

public interface ProjetoRepository extends JpaRepository<Projeto, Integer> {
    List<Projeto> findByDescricao(String descricao);
}

public interface RecursoRepository extends JpaRepository<Recurso, Integer> {
    Optional<Recurso> findByNomeRecurso(String nomeRecurso);
}

public interface TarefaRepository extends JpaRepository<Tarefa, Integer> {
    Optional<Tarefa> findByStatusTarefa(String statusTarefa);
}
