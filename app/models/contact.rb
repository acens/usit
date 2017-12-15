class Contact < ApplicationRecord
  include MailForm::Delivery
  belongs_to :knowledge

  attribute :name, validate: true
  attribute :email, validate:  /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :history, validate: true
  attribute :language, validaate: true
  attribute :knowledge_id, validaate: true

  def headers
    {
      subject: "[CONTATO SITE] - Novo email vindo do site",
      to: "contato.acens@gmail.com",
      from: email
    }
  end
end
