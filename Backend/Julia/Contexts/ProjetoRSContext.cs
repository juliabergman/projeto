using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Julia.Domains
{
    public partial class ProjetoRSContext : DbContext
    {
        public ProjetoRSContext()
        {
        }

        public ProjetoRSContext(DbContextOptions<ProjetoRSContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Postagem> Postagem { get; set; }
        public virtual DbSet<TipoPostagem> TipoPostagem { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuario { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-GVQ9O4O\\SQLEXPRESS; initial catalog=ProjetoRedeSocial; Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<Postagem>(entity =>
            {
                entity.HasKey(e => e.IdPostagem)
                    .HasName("PK__Postagem__74F48643D98175DD");

                entity.Property(e => e.IdTipoPostagem).HasColumnName("IdTipo_Postagem");

                entity.Property(e => e.PublicacaoOpinar).HasColumnType("text");

                entity.HasOne(d => d.IdTipoPostagemNavigation)
                    .WithMany(p => p.Postagem)
                    .HasForeignKey(d => d.IdTipoPostagem)
                    .HasConstraintName("FK__Postagem__IdTipo__2C3393D0");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Postagem)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Postagem__IdUsua__2D27B809");
            });

            modelBuilder.Entity<TipoPostagem>(entity =>
            {
                entity.HasKey(e => e.IdTipoPostagem)
                    .HasName("PK__Tipo_pos__D38CE91CE3E30E81");

                entity.ToTable("Tipo_postagem");

                entity.Property(e => e.IdTipoPostagem).HasColumnName("IdTipo_Postagem");

                entity.Property(e => e.TipoPostagem1)
                    .HasColumnName("TipoPostagem")
                    .HasColumnType("text");
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
                    .HasName("PK__Tipo_Usu__DAD79C77AC49C9B8");

                entity.ToTable("Tipo_Usuario");

                entity.Property(e => e.IdTipoUsuario).HasColumnName("IdTipo_Usuario");

                entity.Property(e => e.Tipo)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuario__5B65BF97C9965304");

                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Usuario__A9D10534BCE32B16")
                    .IsUnique();

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.IdTipoUsuario).HasColumnName("IdTipo_Usuario");

                entity.Property(e => e.Nome)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdTipoUsuarioNavigation)
                    .WithMany(p => p.Usuario)
                    .HasForeignKey(d => d.IdTipoUsuario)
                    .HasConstraintName("FK__Usuario__IdTipo___276EDEB3");
            });
        }
    }
}
