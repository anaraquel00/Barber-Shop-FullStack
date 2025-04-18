package com.ana.barbershop.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.ana.barbershop.entity.Produto;
import com.ana.barbershop.produtodto.ProdutoDTO;
import com.ana.barbershop.repository.ProdutoRepository;
import com.ana.barbershop.service.ProdutoService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
@Valid
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {

private final ProdutoRepository repository;
@Autowired
private ProdutoService produtoService;

@GetMapping
public List<Produto> getAlProdutos() {
    return repository.findAll();
}
@PostMapping
public ResponseEntity<Produto> criarProduto(@Valid @RequestBody ProdutoDTO dto) {
    
    Produto produto = new Produto();
    try {
        produto = produtoService.criarProduto(dto);
    } catch (Exception e) {
        
        e.printStackTrace();
    }
    return ResponseEntity.ok(produto);
}

@GetMapping("/{id}")
public ResponseEntity<Produto> getById(@PathVariable Long id) {
    Optional<Produto> produto = repository.findById(id);
    return produto.map(ResponseEntity::ok)
                 .orElse(ResponseEntity.notFound().build());
}
@PutMapping("/{id}")
public Produto updateProduto(@RequestBody Produto produto, @PathVariable Long id) {
    return repository.save(produto);
}

@DeleteMapping("/{id}")
public ResponseEntity<?> deletarProduto(@PathVariable Long id) {
    try {
        repository.deleteById(id);
        return ResponseEntity.ok().build();
    } catch (EmptyResultDataAccessException e) {
        return ResponseEntity.notFound().build(); // ID não existe
    } catch (Exception e) {
        return ResponseEntity.internalServerError().body("Erro ao deletar produto: " + e.getMessage());
    }
}
}