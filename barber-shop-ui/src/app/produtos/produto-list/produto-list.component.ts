import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Produto } from '../produto.model';
import { MatTooltipModule } from '@angular/material/tooltip';



@Component({
  selector: 'app-produto-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CurrencyPipe,
    MatTooltipModule,

  ],
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss'],

})
export class ProdutoListComponent implements OnInit {


  produtos: Produto[] = [];
  displayedColumns: string[] = ['id', 'nome', 'preco', 'estoque', 'categoria', 'acoes'];

  adicionarProduto() {
    this.router.navigate(['/produtos/novo']); // Navega para a rota
  }

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private snackBar: MatSnackBar
    ) {}

  ngOnInit() {
    this.produtoService.getProdutos().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
        console.log('Produtos carregados:', produtos);
      },
      error: (err) => console.error('Erro ao carregar produtos:', err) // Mostra erro no console
    });
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe({
      next: (produtos) => this.produtos = produtos,
      error: (err) => this.showError('Erro ao carregar produtos!')
    });
  }
  showError(message: string): void {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000,
      panelClass: ['error-snackbar'] // Estilo customizado (opcional)
    });
  }

  editarProduto(id: number) {
    this.router.navigate(['/produtos/editar', id]); // Navega para a edição
  }

 deletarProduto(id: number) {
    if (confirm('Tem certeza?')) {
      this.produtoService.deleteProduto(id).subscribe({
        next: () => this.carregarProdutos(), // Recarrega a lista após exclusão
        error: (err) => console.error('Erro ao excluir:', err)
      });
    }
  }

}
