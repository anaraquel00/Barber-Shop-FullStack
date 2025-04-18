package com.ana.barbershop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ana.barbershop.entity.Produto;
import com.ana.barbershop.entity.Produto.EstoqueStatus;
import com.ana.barbershop.produtodto.ProdutoDTO;
import com.ana.barbershop.repository.ProdutoRepository;

@Service
public class ProdutoService {

@Autowired
private ProdutoRepository produtoRepository;

    // Removed duplicate static method criarProduto
    public Produto criarProduto(ProdutoDTO dto) {
        Produto produto = new Produto();
        produto.setNome(dto.getNome());
        produto.setPreco(dto.getPreco());
        produto.setDescricao(dto.getDescricao());
        produto.setEstoque(EstoqueStatus.valueOf(dto.getEstoque().toUpperCase())); // Valor esperado pelo enum
        produto.setCategoria(dto.getCategoria());
        try {
            produto.setEstoque(EstoqueStatus.valueOf(dto.getEstoque().toUpperCase()));
        } catch (IllegalArgumentException ex) {
            throw new IllegalArgumentException("Valor inválido para 'estoque'. Use: EM_ESTOQUE ou ESGOTADO.");
        }
        return produtoRepository.save(produto);
    }
    public Produto atualizarProduto(Long id, ProdutoDTO dto) {
        Produto produto = produtoRepository.findById(id).orElseThrow(() -> new RuntimeException("Produto não encontrado"));
        produto.setNome(dto.getNome());
        produto.setPreco(dto.getPreco());
        // ... mapear outros campos
        return produtoRepository.save(produto);
    }
    public void deletarProduto(Long id) {
        produtoRepository.deleteById(id);
    }
    public Produto buscarProdutoPorId(Long id) {
        return produtoRepository.findById(id).orElseThrow(() -> new RuntimeException("Produto não encontrado"));
    }
    public List<Produto> listarTodosProdutos() {
        return produtoRepository.findAll();
    }
}
